chrome.runtime.onInstalled.addListener(async function () {
    try {
        await removeDynamicRules([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
        await addDynamicRules([
            {
                id: 1,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: chrome.runtime.getURL('speech/\\1.mp3')
                    }
                },
                condition: {
                    regexFilter: "^.*/speech/maxim/(\\d+)\\.mp3$",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 2,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/scanAgain.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/scanAgain.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 3,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/repeat.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/repeat.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 4,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/placeSelected.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/placeSelected.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 5,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/analysis_done.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/analysis_done.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 6,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/barcode_scan.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/barcode_scan.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 7,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/box_accepted.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/box_accepted.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 8,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/cell_done.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/cell_done.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 9,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/cell_done_move_to_place.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/cell_done_move_to_place.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 10,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/cellOccupied.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/cellOccupied.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 11,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/cellSelected.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/cellSelected.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 12,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/client_in_office.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/client_in_office.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 13,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/error.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/error.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 14,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/hasItemsOnPlace.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/hasItemsOnPlace.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 15,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/inBox.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/inBox.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 16,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/item_moved.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/item_moved.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 17,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/itemFound.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/itemFound.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 18,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/itemNotFound.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/itemNotFound.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 19,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/itemsMovedToCell.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/itemsMovedToCell.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 20,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/itemsMovedToPlace.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/itemsMovedToPlace.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 21,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/placeNotFound.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/placeNotFound.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 22,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/reject.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/reject.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 23,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/scan_excise.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/scan_excise.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 24,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/scanItem.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/scanItem.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 25,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/scanPlace.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/scanPlace.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 26,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/spNotSelected.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/spNotSelected.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 27,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/supplier_box.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/supplier_box.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 28,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/surplus.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/surplus.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 29,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/boxAccepted.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/boxAccepted.mp3",
                    resourceTypes: ["media"]
                }
            },
            {
                id: 30,
                priority: 1,
                action: {
                    type: "redirect",
                    redirect: {
                        url: chrome.runtime.getURL('speech/bag.mp3')
                    }
                },
                condition: {
                    urlFilter: "*://*/speech/maxim/bag.mp3",
                    resourceTypes: ["media"]
                }
            }

        ]);

    } catch (error) {
        console.error('Error in onInstalled listener:', error);
    }
});

function removeDynamicRules(ruleIds) {
    return new Promise((resolve, reject) => {
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: ruleIds
        }, function () {
            if (chrome.runtime.lastError) {
                reject(new Error('Error removing rule: ' + chrome.runtime.lastError.message));
            } else {
                resolve();
            }
        });
    });
}

function addDynamicRules(rules) {
    return new Promise((resolve, reject) => {
        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: rules
        }, function () {
            if (chrome.runtime.lastError) {
                reject(new Error('Error adding rule: ' + chrome.runtime.lastError.message));
            } else {
                resolve();
            }
        });
    });
}
