<?php
/**
 * Plugin Name:       Expandable Block
 * Description:       Short text with simple CTA to see full text.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.1.1
 * Author:            Innocode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       innocode-blocks
 *
 * @package           innocode
 */

function innocode_block_expand_block_init() {
	register_block_type( __DIR__ );
}

add_action( 'init', 'innocode_block_expand_block_init' );
