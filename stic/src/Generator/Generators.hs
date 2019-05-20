module Generator.Generators
       ( generateWebApp
       ) where

import Data.Aeson ((.=), object, ToJSON(..))
import System.FilePath (FilePath, (</>))

import qualified Util
import Wasp
import Generator.FileDraft
import qualified Generator.EntityGenerator as EntityGenerator
import qualified Generator.PageGenerator as PageGenerator


generateWebApp :: Wasp -> [FileDraft]
generateWebApp wasp = concatMap ($ wasp)
    [ generateReadme
    , generatePackageJson
    , generateGitignore
    , generatePublicDir
    , generateSrcDir
    ]

generateReadme :: Wasp -> [FileDraft]
generateReadme wasp = [simpleTemplateFileDraft "README.md" wasp]

generatePackageJson :: Wasp -> [FileDraft]
generatePackageJson wasp = [simpleTemplateFileDraft "package.json" wasp]

generateGitignore :: Wasp -> [FileDraft]
generateGitignore wasp = [createTemplateFileDraft ".gitignore" "gitignore" (toJSON wasp)]

generatePublicDir :: Wasp -> [FileDraft]
generatePublicDir wasp
    = createCopyFileDraft ("public" </> "favicon.ico") ("public" </> "favicon.ico")
    : map (\path -> simpleTemplateFileDraft ("public/" </> path) wasp)
        [ "index.html"
        , "manifest.json"
        ]

-- * Src dir

generateSrcDir :: Wasp -> [FileDraft]
generateSrcDir wasp
    = (createCopyFileDraft ("src" </> "logo.png") ("src" </> "logo.png"))
    : map (\path -> simpleTemplateFileDraft ("src/" </> path) wasp)
        [ "App.js"
        , "App.test.js"
        , "App.css"
        , "index.js"
        , "index.css"
        , "router.js"
        , "serviceWorker.js"
        , "store/index.js"
        , "store/middleware/logger.js"
        ]
    ++ PageGenerator.generatePages wasp
    ++ EntityGenerator.generateEntities wasp
    ++ [generateReducersJs wasp]

generateReducersJs :: Wasp -> FileDraft
generateReducersJs wasp = createTemplateFileDraft dstPath srcPath templateData
  where
    srcPath = "src" </> "reducers.js"
    dstPath = srcPath
    templateData = object
        [ "wasp" .= wasp
        , "entities" .= map toEntityData (getEntities wasp)
        ]
    toEntityData entity = object
        [ "entity" .= entity
        , "entityLowerName" .= (Util.toLowerFirst $ entityName entity)
        , "entityStatePath" .= ("./" ++ (EntityGenerator.entityStatePathInSrc entity))
        ]


-- * Helpers

-- | Creates template file draft that uses given path as both src and dst path
--   and wasp as template data.
simpleTemplateFileDraft :: FilePath -> Wasp -> FileDraft
simpleTemplateFileDraft path wasp = createTemplateFileDraft path path (toJSON wasp)
