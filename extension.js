const vscode = require('vscode');

function activate(context) {
    const key = 'zenburn-theme.activated';
    const isFirstActivation = !context.globalState.get(key);

    if (isFirstActivation) {
        vscode.workspace.getConfiguration().update(
            'workbench.colorTheme',
            'Zenburn',
            vscode.ConfigurationTarget.Global
        );
        context.globalState.update(key, true);
    }
}

function deactivate() {}

module.exports = { activate, deactivate };
