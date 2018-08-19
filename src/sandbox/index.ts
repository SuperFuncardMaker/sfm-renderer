/**
 * sandbox/index.ts
 * sfm-renderer
 * Super Funcard Maker
 *
 * @author Lanscel Thaledric
 *
 * The sandbox directory is to test any piece of code you want by using sfm-renderer.
 */
import * as gm from "gm";
const im = gm.subClass({ imageMagick: true });

const dir = __dirname;

im(dir + "/assets/wall.jpg")
  .blur(20, 10)
  .write(dir + "/render/wall.jpg", function(this: any, err) {
    if (err) { return console.error("error blur file", err); }
    console.log(this.outname + " created  :: ");
  });
