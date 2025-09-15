namespace spriteutils {
     class FlagUtilites {
        constructor() { }

        isDestroyed(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.Destroyed);
        } 

        isInvisible(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.Invisible)
        }

        isGhost(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.Ghost)
        }        

        isGhostThroughSprites(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.GhostThroughSprites)
        }

        isGhostThroughTiles(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.GhostThroughTiles)
        }

        isGhostThroughWalls(sprite: Sprite): boolean {
            return !sprite || !!(sprite.flags & sprites.Flag.GhostThroughWalls)
        }
    }

    let stateStack: FlagUtilites[];

    function state(): FlagUtilites{
        return stateStack[stateStack.length]
    }

    //% blockId=is_destroyed block="is destroyed %sprite=variables_get(mySprite)"
    export function isDestroyed(sprite: Sprite): boolean {
        return state().isDestroyed(sprite)
    }

    //% blockId="is_invisible" block="is invisible %sprite=variables_get(mySprite)"
    export function isInvisible(sprite: Sprite): boolean {
        return state().isInvisible(sprite)
    }
    //% blockId="is_ghost" block="is ghost %sprite=variables_get(mgSprite)"
    export function isGhost(sprite: Sprite): boolean {
        return state().isGhost(sprite)
    }

    //% blockId="is_ghost_through_sprites"
    //% block="is ghost through sprites %sprite=variables_get(mySprite)"
    export function isGhostThroughSprites(sprite: Sprite): boolean {
        return state().isGhostThroughSprites(sprite)
    }

    //% blockId="is_ghost_through_tiles"
    //% block="is ghost through tiles %sprite=variables_get(mySprite)"
    export function isGhostThroughTiles(sprite: Sprite): boolean {
        return state().isGhostThroughTiles(sprite)
    }

    //% blockId="is_ghost_through_walls"
    //% block="is ghost through walls %sprite=variables_get(mySprite)"   
    export function isGhostThroughWalls(sprite: Sprite): boolean {
        return state().isGhostThroughWalls(sprite)
    }
}
