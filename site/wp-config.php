<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'hipica' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'vertrigo' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'A}]:p}TF1z~byK6viG1 |vu2a5:54,Rt[Z)>x3Zop4F3,-e%z]6M8J1|xf$ d_N3' );
define( 'SECURE_AUTH_KEY',  'py`i#wtg<&Z+U*7ytQ%.4*IWE~m~_P57^F^GX[ouMrQ8>]}oQ~t>pM$C(3bFg2Q+' );
define( 'LOGGED_IN_KEY',    'V<8?}2x$$g)U/qYYT&vC3T3N<hqb(YTGNilhh*+7u5ta&D&zC7)5/6}aHK&@L>{L' );
define( 'NONCE_KEY',        'A ;X[We8B@V1g?){Dtl}5M1Chu*BZ+?VJK;3E3`g>u<z_(Z+@R?+}I/R?)N3+JJ!' );
define( 'AUTH_SALT',        'P#x3tKd_TL.mnjD277.G?p?IY!G<i&Xc[]2}8lCQUk^+pf6p8D.vs]0[Y^#bR%*B' );
define( 'SECURE_AUTH_SALT', 'WK5c~5YAMwwREE2F~~0m::@@JuSHp:g:;].$ ZkL[(e9|.FhHk34M;~[KpCb5_rx' );
define( 'LOGGED_IN_SALT',   ' rd#i98yu8nr*Mi!+7bJA5 6qDq$N%W-#@pHE$A<wBl}9 w4$v<3]%{Mtl642J}7' );
define( 'NONCE_SALT',       'O|r*XEdDizm LJ=;u!Lb(FPexN+m%i95/BX5kn2/?[qCb:]f-OX8GnOim|7||Z2-' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

@ini_set( 'upload_max_filesize' , '512M' );
@ini_set( 'post_max_size', '512M');
@ini_set( 'memory_limit', '512M' );
@ini_set( 'max_execution_time', '600' );
@ini_set( 'max_input_time', '600' );

