var numOfImages = 14;

// The id of the root node of the lightbox
var lightboxRootId = "gallery:::gallery-thumbs:::";

// The id of the parent of the lightbox
var lightboxParentId = "lightbox-parent";

// The ids of the thumbnails in Lightbox.html
var firstImageId = "gallery:::gallery-thumbs:::lightbox-cell::0:";
var secondImageId = "gallery:::gallery-thumbs:::lightbox-cell::1:";
var thirdImageId = "gallery:::gallery-thumbs:::lightbox-cell::2:";
var fourthImageId = "gallery:::gallery-thumbs:::lightbox-cell::3:";
var fifthImageId = "gallery:::gallery-thumbs:::lightbox-cell::4:";
var sixthImageId = "gallery:::gallery-thumbs:::lightbox-cell::5:";
var seventhImageId = "gallery:::gallery-thumbs:::lightbox-cell::6:";
var tenthImageId = "gallery:::gallery-thumbs:::lightbox-cell::9:";
var fourthLastImageId = "gallery:::gallery-thumbs:::lightbox-cell::10:";
var thirdLastImageId = "gallery:::gallery-thumbs:::lightbox-cell::11:";
var secondLastImageId = "gallery:::gallery-thumbs:::lightbox-cell::12:";
var lastImageId = "gallery:::gallery-thumbs:::lightbox-cell::13:";

// CSS class names
var defaultClass="image-container-default";
var focusedClass="image-container-selected";
var draggingClass="image-container-dragging";

// All the test function names for the JsUnit tests.  Needed for running JsUnit in 
// IE and Safari.
//
function exposeTestFunctionNames() {
	return [
	    // GridLayoutHandlerTests.js
		//
		"testGetRightSibling",
		"testGetLeftSibling",
		"testGetItemBelow",
		"testGetItemAbove",
		"testUpdateGridWidth",
		
		// LightboxTests.js
		//
		"testFindAncestorGridCell",
		"testHandleArrowKeyPressMoveThumbDown",
		"testHandleArrowKeyPressWrapThumbUp",
		"testHandleArrowKeyPressForUpAndDown",
		"testHandleArrowKeyPressForLeftAndRight",
		"testHandleKeyUpAndHandleKeyDownChangesState",
		"testHandleKeyUpAndHandleKeyDownItemMovement",
		"testHandleArrowKeyPressForCtrlLeftAndCtrlRight",
		"testPersistFocus",
		"testfocusItem",
		"testSelectActiveItemNothingSelected",
		"testSelectActiveItemSecondSelected",
		"testSetActiveItemToDefaultState",
		"testHandleWindowResizeEvent",
		"testUpdateActiveDescendent"
	];
}	// end exposeTestFunctionNames().
