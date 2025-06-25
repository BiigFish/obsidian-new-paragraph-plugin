import { Plugin, Editor } from 'obsidian';

// Define the main class for your plugin, extending Obsidian's Plugin class.
export default class DoubleNewlinePlugin extends Plugin {

    /**
     * This method is called when the plugin is loaded.
     * It's where you register commands, event listeners, etc.
     */
    async onload() {
        console.log('Loading Double Newline Plugin');

        // This adds an editor command that inserts two newlines.
        // It's designed to be remapped to the 'Enter' key by the user in Obsidian's hotkey settings.
        this.addCommand({
            id: 'insert-two-newlines', // Unique ID for the command
            name: 'Insert two newlines', // Display name for the command in settings

            // editorCallback is a function that runs when the command is triggered in the editor.
            // It receives the current Editor instance as an argument.
            editorCallback: (editor: Editor) => {
                // Get the current cursor position.
                const cursor = editor.getCursor();

                // Insert two newline characters at the current cursor position.
                // The cursor will then be placed after the inserted newlines.
                editor.replaceRange('\n\n', cursor);
            }
        });

        // IMPORTANT NOTE FOR USERS:
        // This plugin registers a command. To make it trigger specifically when you hit 'Enter',
        // you will need to manually remap the 'Enter' key in Obsidian's Hotkeys settings.
        // Search for the "Insert two newlines" command and assign 'Enter' as its hotkey.
        // This will override Obsidian's default single newline behavior.
    }

    /**
     * This method is called when the plugin is unloaded.
     * Use it to clean up any resources or listeners if any were registered.
     */
    onunload() {
        console.log('Unloading Double Newline Plugin');
    }
}
