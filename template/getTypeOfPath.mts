import PathType from "../../export/PathType.mts"
import factory from "./getTypeOfPathFactory.mts"
//import factory from "./getTypeOfPathSyncFactory.mts"

const impl = factory()

/**
 * @brief Asynchronously get the type of a path.
// * @brief Synchronously get the type of a path.
 * @description
 * Determines the type of supplied path.
 * Note: symbolic links are never resolved.
 * @return
 * The type of the path which can be the following values:
 * 
 * `nonExisting` - path does not exist
 * 
 * `regularFile` - path is a file
 * 
 * `regularDir` - path is a directory
 * 
 * `linkToFile` - path is a symbolic link and points to a file
 * 
 * `linkToDir` - path is a symbolic link and points to a directory
 * 
 * `brokenLink` - path is a symbolic link and points to a non existing path
 */
export default async function(paths : string[] | string) : Promise<PathType> {
//export default function(paths : string[] | string) : PathType {
	return await impl(paths)
//	return impl(paths)
}
