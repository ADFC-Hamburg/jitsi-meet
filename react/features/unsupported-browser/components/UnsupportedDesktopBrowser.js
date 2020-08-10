/* @flow */

import React, { Component } from 'react';

import { isBrowsersOptimal } from '../../base/environment';
import { translate } from '../../base/i18n';

import { CHROME, FIREFOX } from './browserLinks';

/**
 * The namespace of the CSS styles of UnsupportedDesktopBrowser.
 *
 * @private
 * @type {string}
 */
const _SNS = 'unsupported-desktop-browser';

/**
 * The type of the React {@code Component} props of
 * {@link UnsupportedDesktopBrowser}.
 */
type Props = {

    /**
     * The function to translate human-readable text.
     */
    t: Function
};

/**
 * React component representing unsupported browser page.
 *
 * @class UnsupportedDesktopBrowser
 */
class UnsupportedDesktopBrowser extends Component<Props> {
    /**
     * Renders the component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <div class = 'unsupported-desktop-browser'>
            <h2 class = 'unsupported-desktop-browser__title'>
                Nicht unterstützter Browser
            </h2>
            <p class ='unsupported-desktop-browser__description'>
                ADFC Meet unterstützt Ihren verwendeten Browser leider nicht. 
                Dies betrifft alte Versionen des Internet-Explorers oder auch den
                weit verbreiteten Firefox, der leider einige Fehler enthält, die die
                Sprach- und Videoqualität für alle Teilnehmer*innen negativ beeinflusst.
                Auch vom Safari-Browser werden Probleme berichtet.
            </p>
            <p class ='unsupported-desktop-browser__description'>
                Wir empfehlen die Nutzung eines Chromium-basierten Browsers wie 
                <a
                    className = 'unsupported-desktop-browser__link'
                    href = 'https://www.google.com/chrome/' >Chrome</a>, 
                <a
                    class = 'unsupported-desktop-browser__link'
                    href = 'https://www.chromium.org/'>Chromium</a>, 
                <a
                    class = 'unsupported-desktop-browser__link'
                    href = 'https://www.opera.com/de/download'>Opera</a> oder den neuen 
                <a
                    class = 'unsupported-desktop-browser__link'
                    href = 'https://www.microsoft.com/de-de/edge'>Edge</a>.
            </p>
            <p class ='unsupported-desktop-browser__description'>
                Außerdem können Sie ADFC Meet mit dem 
                <a
                    class = 'unsupported-desktop-browser__link'
                    href = 'https://github.com/jitsi/jitsi-meet-electron#installation'>jitsi-Electron-Client</a>
                unter Windows, Linux oder Mac OS nutzen.
                Die Programmdatei muss nur heruntergeladen und
                ausgeführt werden. Es ist keine besondere Installation erforderlich.
            </p>
            <p class ='unsupported-desktop-browser__description'>
                Für mobile Apple- oder Android-Geräte stehen Ihnen <a
                    class = 'unsupported-desktop-browser__link'
                    href = 'https://jitsi.org/downloads/'>Apps</a>
                im itunes-Store, Google Play oder F-Droid zur Verfügung.
            </p>            
        </div>
            );
    }

    /**
     * Returns whether or not a link to download Firefox is displayed.
     *
     * @private
     * @returns {boolean}
     */
    _showFirefox() {
        return isBrowsersOptimal('firefox');
    }
}

export default translate(UnsupportedDesktopBrowser);
