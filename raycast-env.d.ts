/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Aria2 RPC Port - Port on which the local or remote aria2c RPC server runs (default: 6800). */
  "rpcPort": string,
  /** RPC Secret Token - Secret token configured in aria2.conf (leave blank if none). */
  "rpcSecret": string,
  /** Auto-Start Daemon - Automatically start a local background aria2c daemon if none is detected on the configured port. */
  "autoStartDaemon": boolean,
  /** Verify SSL Certificates - Verify HTTPS certificates. Disable if you encounter SSL/TLS handshake failures on some servers. */
  "checkCertificate": boolean,
  /** Automatic Updates - Enable automatic background updates for this extension from the Raycast Store. */
  "autoUpdate": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `tasks` command */
  export type Tasks = ExtensionPreferences & {}
  /** Preferences accessible in the `add-download` command */
  export type AddDownload = ExtensionPreferences & {}
  /** Preferences accessible in the `download-from-torrent` command */
  export type DownloadFromTorrent = ExtensionPreferences & {}
  /** Preferences accessible in the `configuration` command */
  export type Configuration = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `tasks` command */
  export type Tasks = {}
  /** Arguments passed to the `add-download` command */
  export type AddDownload = {}
  /** Arguments passed to the `download-from-torrent` command */
  export type DownloadFromTorrent = {}
  /** Arguments passed to the `configuration` command */
  export type Configuration = {}
}

