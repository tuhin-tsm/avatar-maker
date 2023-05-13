import Eyes1BlueFront from "./Eyes/Eyes1BlueFront";
import Eyes1BlueSide from "./Eyes/Eyes1BlueSide";
import Eyes1BrownFront from "./Eyes/Eyes1BrownFront";
import Eyes1BrownSide from "./Eyes/Eyes1BrownSide";
import Eyes1GreenFront from "./Eyes/Eyes1GreenFront";

import G1PullbackFrontBlackFront from "./Hair/G1PullbackFrontBlackFront";
import G1PullbackFrontBlackSide from "./Hair/G1PullbackFrontBlackSide";

import Head1RoundDarkestFront from "./Head/Head1RoundDarkestFront";
import Head1RoundDarkFront from "./Head/Head1RoundDarkFront";
import Head1RoundFairFront from "./Head/Head1RoundFairFront";
import Head1RoundMediumFront from "./Head/Head1RoundMediumFront";
import Head1RoundMediumSide from "./Head/Head1RoundMediumSide";
import Head2NarrowDarkestFront from "./Head/Head2NarrowDarkestFront";
import Head2NarrowDarkFront from "./Head/Head2NarrowDarkFront";
import Head2NarrowFairFront from "./Head/Head2NarrowFairFront";
import Head2NarrowMediumFront from "./Head/Head2NarrowMediumFront";

import Mouth1Front from "./Mouth/Mouth1Front";
import Mouth1Side from "./Mouth/Mouth1Side";

import Nose1Front from "./Nose/Nose1Front";
import Nose1Side from "./Nose/Nose1Side";

/**
 * Avatar -> facing: 0 => front, 1 => side
 * Hair -> side: 0 => front, 1 => back
 */
export default {
	eyes: [
		{
			facing: 0,
			name: 'eyes_1_blue_front',
			code: Eyes1BlueFront
		},
		{
			facing: 1,
			name: 'eyes_1_blue_side',
			code: Eyes1BlueSide
		},
		{
			facing: 0,
			name: 'eyes_1_brown_front',
			code: Eyes1BrownFront
		},
		{
			facing: 1,
			name: 'eyes_1_brown_side',
			code: Eyes1BrownSide
		},
		{
			facing: 0,
			name: 'eyes_1_green_front',
			code: Eyes1GreenFront
		},
	],
	hair: [
		{
			facing: 0,
			side: 0,
			name: 'G1_pullback_front_black_front',
			code: G1PullbackFrontBlackFront
		},
		{
			facing: 1,
			side: 0,
			name: 'G1_pullback_front_black_side',
			code: G1PullbackFrontBlackSide
		},
	],
	head: [
		{
			facing: 0,
			name: 'head_1_round_darkest_front',
			code: Head1RoundDarkestFront
		},
		{
			facing: 0,
			name: 'head_1_round_dark_front',
			code: Head1RoundDarkFront
		},
		{
			facing: 0,
			name: 'head_1_round_fair_front',
			code: Head1RoundFairFront
		},
		{
			facing: 0,
			name: 'head_1_round_medium_front',
			code: Head1RoundMediumFront
		},
		{
			facing: 1,
			name: 'head_1_round_medium_side',
			code: Head1RoundMediumSide
		},
		{
			facing: 0,
			name: 'head_2_narrow_darkest_front',
			code: Head2NarrowDarkestFront
		},
		{
			facing: 0,
			name: 'head2_narrow_dark_front',
			code: Head2NarrowDarkFront
		},
		{
			facing: 0,
			name: 'head_2_narrow_fair_front',
			code: Head2NarrowFairFront
		},
		{
			facing: 0,
			name: 'head_2_narrow_medium_front',
			code: Head2NarrowMediumFront
		},
	],
	mouth: [
		{
			facing: 0,
			name: 'mouth_1_front',
			code: Mouth1Front
		},
		{
			facing: 1,
			name: 'mouth_1_side',
			code: Mouth1Side
		},
	],
	nose: [
		{
			facing: 0,
			name: 'nose_1_front',
			code: Nose1Front
		},
		{
			facing: 1,
			name: 'nose_1_side',
			code: Nose1Side
		},
	],
}
