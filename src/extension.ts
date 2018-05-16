'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "copyplaintext" is now active!');

    // node-copy-paste https://github.com/xavi-/node-copy-paste
    var ncp = require("copy-paste");

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.copyPlainText', () => {
        // The code you place here will be executed every time your command is executed
        var editor = vscode.window.activeTextEditor;
        if(!editor) {
            return; // No open text editor
        }
        
        var selection = editor.selection;
        if(!selection.isEmpty) {
            ncp.copy(editor.document.getText(selection));
            //vscode.window.showInformationMessage(editor.document.getText(selection));
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}