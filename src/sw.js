chrome.runtime.onInstalled.addListener(function() {
    chrome.management.getAll(function(extensions) {
        let hasExtension = extensions.some(ext => ext.id === 'oobnbmnbdiollepahbognnihpaomcdpb');
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
                                regexFilter: "^.*/speech/oksana/(\\d+\\.mp3)$",
                                resourceTypes: ["media"]
                            }
                        }],
                        removeRuleIds: [1]
                    });

        if (!hasExtension) {
            chrome.action.setBadgeText({
                text: ``
            });
            
        } else {
            console.log('Запуск прерван')
            chrome.action.setBadgeBackgroundColor({
                color: "red"
            });
            chrome.action.setBadgeText({
                text: `ERR`
            });
        }
    });
});