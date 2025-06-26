import { Plugin, Editor, EditorPosition } from 'obsidian';

// Define the main class for your plugin, extending Obsidian's Plugin class.
export default class DoubleNewlinePlugin extends Plugin {

    /**
     * This method is called when the plugin is loaded.
     * It's where you register commands, event listeners, etc.
     */
    async onload() {
        console.log('Loading Double Newline Plugin');

        // Register a command that will be triggered by the Enter key
        this.addCommand({
            id: 'insert-double-newline',
            name: 'Insert double newline',
            hotkeys: [{ modifiers: [], key: 'Enter' }],
            editorCallback: (editor: Editor) => {
                this.insertDoubleNewline(editor);
            }
        });

        // Also keep the manual command for users who want to trigger it manually
        this.addCommand({
            id: 'insert-two-newlines',
            name: 'Insert two newlines',
            editorCallback: (editor: Editor) => {
                this.insertDoubleNewline(editor);
            }
        });
    }

    /**
     * Insert two newlines at the current cursor position
     */
    private insertDoubleNewline(editor: Editor) {
        const cursor = editor.getCursor();
        editor.replaceRange('\n\n', cursor);
        
        // Move cursor to the position after the second newline
        const newPosition: EditorPosition = {
            line: cursor.line + 2,
            ch: 0
        };
        editor.setCursor(newPosition);
    }

    /**
     * This method is called when the plugin is unloaded.
     * Use it to clean up any resources or listeners if any were registered.
     */
    onunload() {
        console.log('Unloading Double Newline Plugin');
    }
}
