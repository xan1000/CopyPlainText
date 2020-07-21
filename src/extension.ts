import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    // node-copy-paste https://github.com/xavi-/node-copy-paste
    const ncp = require("copy-paste");

    const disposable = vscode.commands.registerCommand("extension.copyPlainText", () => {
        const editor = vscode.window.activeTextEditor;
        if(!editor) {
            return; // No open text editor.
        }
        if(!editor.selection.isEmpty) {
            ncp.copy(editor.document.getText(editor.selection));
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
