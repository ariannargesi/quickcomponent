export interface RootState {
    app: App
}

export enum StyleFormats {
    CSS = "css",
    SASS = "sass",
}

export enum ScriptFormats {
    TS = "ts",
    JS = "js",
}

export enum ExportTypes {
    Named,
    Default,
}

export enum EditorView {
    Script,
    Style,
}

export enum typesDecleration {
    Interface,
    Type,
}

export interface TextObject {
    text: string
    key: string
}
export interface ComponentMemberProp {
    className?: string
    style?: object
}
export interface ComponentMember {
    title: string
    text?: string
    key: string
    props: ComponentMemberProp
    children: ComponentMember[] | TextObject[]
}

export interface PropItem {
    name: string
    type: string
    defaultValue?: string
    required?: boolean
}

export interface Config {
    usingTestFile: boolean
    styleType: StyleFormats
    scriptType: ScriptFormats
    scriptFileName: string
    styleFileName: string
    exportType: ExportTypes
    propsList: PropItem[]
    hooksList: string[]
    componentName: string
    propDeclerationType: typesDecleration
    propDisctruction: boolean
}
export interface Output {
    output: {
        style: string
        script: string
        commands: { description: string; command: string }[]
    }
}

export interface App extends Output {
    openDrawer: boolean
    selectedKey: string
    expandedKey: string[]
    searchQuery: {
        value: string
        exact: boolean
    }
    config: Config
    addChildTo: string
    inputKey: string
    map: ComponentMember[]
    editorView: EditorView
    refs: any[]
}
