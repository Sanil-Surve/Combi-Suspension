/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='../images/',
        aud='../media/',
        vid='../media/',
        js='../js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'page8-asset1',
                            type: 'image',
                            rect: ['0px', '0px', '1080px', '720px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"page8-asset1.png",'0px','0px']
                        },
                        {
                            id: 'page2-asset2',
                            type: 'image',
                            rect: ['51px', '338px', '21px', '44px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"page2-asset2.png",'0px','0px']
                        },
                        {
                            id: 'page4-asset1',
                            type: 'image',
                            rect: ['969px', '47px', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"page4-asset1.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1080px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page07_edgeActions.js");
})("EDGE-768282051");
