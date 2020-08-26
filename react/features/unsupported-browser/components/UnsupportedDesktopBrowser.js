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
        <div className = { _SNS }>
            <h2 className = { `${_SNS}__title` }>
                Nicht unterstützter Browser
            </h2>
            <p className = { `${_SNS}__description` }>
                ADFC Meet unterstützt Ihren verwendeten Browser leider nicht.
                Dies betrifft alte Versionen des Internet-Explorers oder auch den
                weit verbreiteten Firefox, der leider einige Fehler enthält, die die
                Sprach- und Videoqualität für alle Teilnehmer*innen negativ beeinflusst.
                Auch vom Safari-Browser werden Probleme berichtet.
            </p>
            <p className = { `${_SNS}__description` }>
                Wir empfehlen die Nutzung eines Chromium-basierten Browsers wie <span> </span>
                <a
                    className = { `${_SNS}__link` }
                    href = 'https://www.google.com/chrome/' >Chrome</a>,<span> </span>
                <a
                    className = { `${_SNS}__link` }
                    href = 'https://www.chromium.org/'>Chromium</a>,<span> </span>
                <a
                    className = { `${_SNS}__link` }
                    href = 'https://www.opera.com/de/download'>Opera</a> oder den neuen <span> </span> 
                <a
                    className = { `${_SNS}__link` }
                    href = 'https://www.microsoft.com/de-de/edge'>Edge</a>. 
            </p>
            <p className = { `${_SNS}__description` }>
                Außerdem können Sie ADFC Meet mit dem <span> </span> 
                <a
                    className = { `${_SNS}__link` }
                    href = 'https://github.com/jitsi/jitsi-meet-electron#installation'>jitsi-Electron-Client</a> <span> </span> 
                unter Windows, Linux oder Mac OS nutzen.
                Die Programmdatei muss nur heruntergeladen und
                ausgeführt werden. Es ist keine besondere Installation erforderlich.
            </p>
            <p className = { `${_SNS}__description` }>
                Für mobile Apple- oder Android-Geräte stehen Ihnen <a
                    className = { `${_SNS}__link` }
                    href = 'https://jitsi.org/downloads/'>Apps</a> <span> </span> 
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
