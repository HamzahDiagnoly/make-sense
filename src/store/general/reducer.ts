import {GeneralActionTypes, GeneralState} from './types';
import {Action} from '../Actions';
import {CustomCursorStyle} from '../../data/enums/CustomCursorStyle';
import {ViewPointSettings} from '../../settings/ViewPointSettings';
import {PlatformUtil} from "../../utils/PlatformUtil";

const initialState: GeneralState = {
    windowSize: null,
    activePopupType: null,
    customCursorStyle: CustomCursorStyle.DEFAULT,
    activeContext: null,
    preventCustomCursor: false,
    imageDragMode: false,
    crossHairVisible: true,
    enablePerClassColoration: true,
    projectData: {
        type: null,
        name: 'my-project-name',
    },
    zoom: ViewPointSettings.MIN_ZOOM,
	keyboardShortcuts: [
        {
            id: 'finish-polygon-creation',
            name: 'Finish Polygon Creation',
            keyCombo: [' '],
            defaultKeyCombo: [' '],
            description: 'Completes polygon creation and adds the label'
        },
        {
            id: 'cancel-label-creation',
            name: 'Cancel Label Creation',
            keyCombo: ['Escape'],
            defaultKeyCombo: ['Escape'],
            description: 'Cancels current label creation'
        },
        {
            id: 'undo-last-point',
            name: 'Undo Last Point',
            keyCombo:  ['Control', 'z'],
            defaultKeyCombo:  ['Control', 'z'],
            description: 'Removes the last added point in polygon creation'
        },
        {
            id: 'toggle-labels-visibility',
            name: 'Toggle Labels Visibility',
            keyCombo: PlatformUtil.isMac() ? ['Option', 'z'] : ['Alt', 'z'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Option', 'z'] : ['Alt', 'z'],
            description: 'Shows or hides all labels in the current image'
        },
        {
            id: 'previous-image',
            name: 'Previous Image',
            keyCombo: PlatformUtil.isMac() ? ['Alt', 'ArrowLeft'] : ['Control', 'ArrowLeft'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Alt', 'ArrowLeft'] : ['Control', 'ArrowLeft'],
            description: 'Navigate to the previous image'
        },
        {
            id: 'next-image',
            name: 'Next Image',
            keyCombo: PlatformUtil.isMac() ? ['Alt', 'ArrowRight'] : ['Control', 'ArrowRight'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Alt', 'ArrowRight'] : ['Control', 'ArrowRight'],
            description: 'Navigate to the next image'
        },
        {
            id: 'zoom-in',
            name: 'Zoom In',
            keyCombo: PlatformUtil.isMac() ? ['Alt', '+'] : ['Control', '+'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Alt', '+'] : ['Control', '+'],
            description: 'Increase zoom level'
        },
        {
            id: 'zoom-out',
            name: 'Zoom Out',
            keyCombo: PlatformUtil.isMac() ? ['Alt', '-'] : ['Control', '-'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Alt', '-'] : ['Control', '-'],
            description: 'Decrease zoom level'
        },
        {
            id: 'move-right',
            name: 'Move Right',
            keyCombo: ['ArrowRight'],
            defaultKeyCombo: ['ArrowRight'],
            description: 'Move viewport to the right'
        },
        {
            id: 'move-left',
            name: 'Move Left',
            keyCombo: ['ArrowLeft'],
            defaultKeyCombo: ['ArrowLeft'],
            description: 'Move viewport to the left'
        },
        {
            id: 'move-up',
            name: 'Move Up',
            keyCombo: ['ArrowUp'],
            defaultKeyCombo: ['ArrowUp'],
            description: 'Move viewport up'
        },
        {
            id: 'move-down',
            name: 'Move Down',
            keyCombo: ['ArrowDown'],
            defaultKeyCombo: ['ArrowDown'],
            description: 'Move viewport down'
        },
        {
            id: 'delete-active-label',
            name: 'Delete Active Label',
            keyCombo: PlatformUtil.isMac() ? ['Backspace'] : ['Delete'],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Backspace'] : ['Delete'],
            description: 'Delete currently selected label'
        },
        // Label selection shortcuts (0-9)
        ...Array.from({ length: 10 }, (_, i) => ({
            id: `select-label-${i}`,
            name: `Select Label ${i}`,
            keyCombo: PlatformUtil.isMac() ? ['Alt', i.toString()] : ['Control', i.toString()],
            defaultKeyCombo: PlatformUtil.isMac() ? ['Alt', i.toString()] : ['Control', i.toString()],
            description: `Selects label at index ${i}`
        }))
    ]
};

export function generalReducer(
    state = initialState,
    action: GeneralActionTypes
): GeneralState {
    switch (action.type) {
        case Action.UPDATE_WINDOW_SIZE: {
            return {
                ...state,
                windowSize: action.payload.windowSize
            }
        }
        case Action.UPDATE_ACTIVE_POPUP_TYPE: {
            return {
                ...state,
                activePopupType: action.payload.activePopupType
            }
        }
        case Action.UPDATE_CUSTOM_CURSOR_STYLE: {
            return {
                ...state,
                customCursorStyle: action.payload.customCursorStyle
            }
        }
        case Action.UPDATE_CONTEXT: {
            return {
                ...state,
                activeContext: action.payload.activeContext
            }
        }
        case Action.UPDATE_PREVENT_CUSTOM_CURSOR_STATUS: {
            return {
                ...state,
                preventCustomCursor: action.payload.preventCustomCursor
            }
        }
        case Action.UPDATE_IMAGE_DRAG_MODE_STATUS: {
            return {
                ...state,
                imageDragMode: action.payload.imageDragMode
            }
        }
        case Action.UPDATE_CROSS_HAIR_VISIBLE_STATUS: {
            return {
                ...state,
                crossHairVisible: action.payload.crossHairVisible
            }
        }
        case Action.UPDATE_PROJECT_DATA: {
            return {
                ...state,
                projectData: action.payload.projectData
            }
        }
        case Action.UPDATE_ZOOM: {
            return {
                ...state,
                zoom: action.payload.zoom
            }
        }
        case Action.UPDATE_ENABLE_PER_CLASS_COLORATION_STATUS: {
            return {
                ...state,
                enablePerClassColoration: action.payload.enablePerClassColoration
            }
        }
		
		case Action.UPDATE_KEYBOARD_SHORTCUTS: {
            return {
                ...state,
                keyboardShortcuts: action.payload.keyboardShortcuts
            }
        }
		
        case Action.UPDATE_KEYBOARD_SHORTCUT: {
            return {
                ...state,
                keyboardShortcuts: state.keyboardShortcuts.map(shortcut => 
                    shortcut.id === action.payload.id
                        ? { ...shortcut, keyCombo: action.payload.keyCombo }
                        : shortcut
                )
            }
        }
		
		case Action.RESET_KEYBOARD_SHORTCUT: {
            return {
                ...state,
                keyboardShortcuts: state.keyboardShortcuts.map(shortcut => 
                    shortcut.id === action.payload.id
                        ? { ...shortcut, keyCombo: shortcut.defaultKeyCombo }
                        : shortcut
                )
            };
        }

        default:
            return state;
    }
}
