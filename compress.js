const compress_images = require('compress-images');

const INPUT = 'img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const OUTPUT = 'resized/';

compress_images(INPUT, OUTPUT, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
                                            {png: {engine: 'pngquant', command: ['--quality=20-50']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
});