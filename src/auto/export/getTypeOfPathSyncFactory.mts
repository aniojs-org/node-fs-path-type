// Warning: this file was automatically created by fourtune vXXXXX
// You will find more information about the specific fourtune version used inside the file src/auto/VERSION.txt
// You should commit this file to source control
import type {UserContextType} from "@fourtune/realm-js"
import {useContext} from "@fourtune/realm-js"

import type {DependenciesType} from "./_DependenciesSyncType.d.mts"

import implementation from "./_implementationSync.mts"

/* needed to make doctypes work in LSP */
import type {ImplementationDocType} from "./_implementationSync.mts"


/* ImplementationDocType is needed to make doctypes work in LSP */
export function getTypeOfPathSyncFactory(user : UserContextType = {}) : ImplementationDocType {
	const context = useContext(user)

	const dependencies : DependenciesType = {}

	return function getTypeOfPathSync(...args: Parameters<ImplementationDocType>) : ReturnType<ImplementationDocType> {
		return implementation(context, dependencies, ...args)
	}
}
