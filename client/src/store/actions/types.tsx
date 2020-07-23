import { testActions } from './testAction';
import { videoActions } from './videoAction';
import { timeLineActions } from './timeLineAction';

export type Action = testActions | videoActions | timeLineActions;

export enum types {
    SET_TEST_VALUE = 'SET_TEST_VALUE',

    SET_VIDEO_FILE = 'SET_VIDEO_FILE',
    SET_VIDEO_DIMENSIONS = 'SET_VIDEO_DIMENSIONS',
    SET_VIDEO_LENGTH = 'SET_VIDEO_LENGTH',
    SET_VIDEO_REF = 'SET_VIDEO_REF',
    SET_VIDEO_VOLUME = 'SET_VIDEO_VOLUME',
    SET_VIDEO_PLAY = 'SET_VIDEO_PLAY',
    SET_VIDEO_CURRENT_DURATION = 'SET_VIDEO_CURRENT_DURATION',
    SET_VIDEO_DURATION = 'SET_VIDEO_DURATION',

    CREATE_NEW_TRACK = 'CREATE_NEW_TRACK',
    ADD_ITEM_TO_TRACK = 'ADD_ITEM_TO_TRACK',
    UPDATE_ITEM_TRACK = 'UPDATE_ITEM_TRACK',
    SET_TIMELINE_REF = 'SET_TIMELINE_REF',
    UPDATE_ITEM_TRACK_POSITION = 'UPDATE_ITEM_TRACK_POSITION',
    UPDATE_ITEM_TRACK_SIZE = 'UPDATE_ITEM_TRACK_SIZE',
    
    UPDATE_ITEM_POSITION = 'UPDATE_ITEM_POSITION',
    UPDATE_CLICKED_ITEM = 'UPDATE_CLICKED_ITEM',
    UPDATE_ITEM_COLOR = 'UPDATE_ITEM_COLOR',

    UPDATE_TEXT_OPTIONS_COLOR = 'UPDATE_TEXT_OPTIONS_COLOR',
    UPDATE_TEXT_OPTIONS_POSITION = 'UPDATE_TEXT_OPTIONS_POSITION',
    UPDATE_TEXT_OPTIONS_ALIGN = 'UPDATE_TEXT_OPTIONS_ALIGN',
    UPDATE_TEXT_OPTIONS = 'UPDATE_TEXT_OPTIONS',
    UPDATE_TEXT_OPTIONS_SIZE = 'UPDATE_TEXT_OPTIONS_SIZE',
    UPDATE_TEXT_OPTIONS_TYPE = 'UPDATE_TEXT_OPTIONS_TYPE'
}