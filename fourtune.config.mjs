import {generateFromTemplate} from "fourtune/autogenerate"

const asyncToSync = {
	"import {stat, lstat} from \"@anio-fs/api/async\"": "import {stat, lstat} from \"@anio-fs/api/sync\"",
	"async function tryStat(path)": "function tryStat(path)",
	"return await stat(path)": "return stat(path)",
	"async function tryLinkStat(path)": "function tryLinkStat(path)",
	"return await lstat(path)": "return lstat(path)",
	"await tryLinkStat(path_to_check)": "tryLinkStat(path_to_check)",
	"await tryStat(path_to_check)": "tryStat(path_to_check)",
	"async function getTypeOfPathImplementation(": "function getTypeOfPathImplementation(",
	"return async function getTypeOfPath(": "return function getTypeOfPathSync(",
	"return await getTypeOfPathImplementation(": "return getTypeOfPathImplementation("
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("template/getTypeOfPathFactory.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("template/getTypeOfPathFactory.mjs", {})
	}
}
