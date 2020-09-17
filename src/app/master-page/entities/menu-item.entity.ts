/**
 * Interfaz para los items del menu.
 */
export interface MenuItem {
    /** Texto del item */
    text: string;

    /** Path del icono */
    icon: string;

    /** Divisor debajo del item */
    divider?: boolean;

    /** Path del icono svg */
    iconSvg: boolean;

    /** Accion a realizar. */
    action: string;

    /** Letra que idica el shortcut. */
    shortcut?: string;

    /** Imagen a reemplazar por el texto del item. */
    imgText?: string;

    /** Url de redireccion. */
    url?: string;
}
