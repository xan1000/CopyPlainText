'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error).

    // node-copy-paste https://github.com/xavi-/node-copy-paste
    let ncp = require("copy-paste");

    let disposable = vscode.commands.registerCommand('extension.copyPlainText', () => {
        let editor = vscode.window.activeTextEditor;
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
