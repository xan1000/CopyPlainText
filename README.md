# Copy Plain Text

Copying text from VS Code includes the formatting which is nice until you paste into a program that is not very format aware - for me this was Gmail and pasting would always include the formatted text but I just wanted plain-text. Work arounds were annoying so I thought I'd try making an extension for it.

## Features

Adds the following:

* Keyboard shortcut "ctrl+alt+c" which will copy the currently selected text to the clipboard with no formatting.
* Editor context menu item when text is selected called "Copy Plain Text".
* Command palette when text is selected also called "Copy Plain Text".

## Note to Linux users on Debian distros

The ncp node-copy-paste https://github.com/xavi-/node-copy-paste package used to copy text to the clipboard requires **xclip** installed on Debian distros. To install use:

```
sudo apt install xclip
```
