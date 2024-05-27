chrome.runtime.onInstalled.addListener(function () {

    chrome.management.getAll(function (extensions) {
        let hasExtension = extensions.some(ext => ext.id === 'oobnbmnbdiollepahbognnihpaomcdpb');
        if (!hasExtension) {
            chrome.action.setBadgeText({
                text: ``
            });

        } else {
            chrome.action.setBadgeBackgroundColor({
                color: "red"
            });
            chrome.action.setBadgeText({
                text: `!`
            });
        }
    });

    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1]
    }, function () {
        if (chrome.runtime.lastError) {
            console.error('Error removing rule:', chrome.runtime.lastError);
        } else {
            chrome.declarativeNetRequest.updateDynamicRules({
                addRules: [{
                    id: 1,
                    priority: 1,
                    action: {
                        type: "redirect",
                        redirect: {
                            regexSubstitution: chrome.runtime.getURL('speech/\\1')
                        }
                    },
                    condition: {
                        regexFilter: "^.*/speech/maxim/(.*\\.mp3)$",
                        resourceTypes: ["media"]
                    }
                }]
            }, function () {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                }
            });
        }
    });

});