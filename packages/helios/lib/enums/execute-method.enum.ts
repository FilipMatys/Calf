/**
 * Helios execute method
 * @description Possible Helios execute methods
 */
export enum HeliosExecuteMethod {

    Login = "Login",

    Logout = "Logout",

    GetEServerVersion = "GetEServerVersion",

    GetMainTree = "GetMainTree",

    GetNavigationTree = "GetNavigationTree",

    GetDatabases = "GetDatabases",

    GetBrowse = "GetBrowse",

    GetBrowseSpecial = "GetBrowseSpecial",

    ChangeDatabase = "ChangeDatabase",

    RunProcedure = "RunHpx",

    RunView = "RunHvw",

    RunFunction = "RunHfx",

    RunExternalAction = "RunExternalAction"
}