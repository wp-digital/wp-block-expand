<?php
/**
 * Plugin Name:       Expandable Block
 * Description:       Short text with simple CTA to see full text.
 * Requires at least: 5.8
 * Requires PHP:      7.1
 * Version:           1.2.0
 * Author:            SMFB Dinamo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpd-blocks
 *
 * @package           wpd
 */

function wpd_block_expand_block_init() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'wpd_block_expand_block_init' );
