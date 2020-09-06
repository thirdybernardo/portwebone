<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpresspizza' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&Pi,&xw?#Xcy*[Uv>JX^r6CS&jej8%CUwYBV?SAq(QwI`v1 a8`| 0N4&|*t(Uaz' );
define( 'SECURE_AUTH_KEY',  'Iky5_b@0,n>gsjdll8)EuP.`2?zQX~Fg;Z,OsmO.N7bN$CkGnbLUw5}v~mZB|Z[?' );
define( 'LOGGED_IN_KEY',    'Q9(`0jn(ktR@5!2/YUAimYl8%8+)q1:t|(fOR`/hAbS)={tV|t1.}?&]#FCD/Qg4' );
define( 'NONCE_KEY',        '?`YY{[}cMA*>myq{0DH^,,xO=v+W#E3E3t:(=-^=DA=)e:QU*W4 $4r-XB7p<q[>' );
define( 'AUTH_SALT',        '=K 3?O5=?hW,wjn.JYW^RBlXT!s*(xq=<<~t^c>bEVa;DyI1A0hKDMqm:nh?GsCe' );
define( 'SECURE_AUTH_SALT', 'J`yxJK]ar1^0CR?`D5E$s&.?U.HF!_p*bXyhg+/Y~$0dN8yLID.l~5n>9?mO;b@}' );
define( 'LOGGED_IN_SALT',   'r4?Z`@6. >Y4XV&`s$~[%>8tY9/+ctbv!5xAh&[*AaAI6?Tw(f21;D=7Hki5uSYh' );
define( 'NONCE_SALT',       'Ja7MZ20#6Szvp;7G!a9|0Rk/N>P}akN6n,ufR35M.*>W_[Jt2Us6wpk,Gj^P.Q6`' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
