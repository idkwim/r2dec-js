/* 
 * Copyright (C) 2017-2018 deroad
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = {
    analyzer: require('libdec/core/Analyzer'),
    archs: require('libdec/Archs'),
    JSON: require('libdec/json64'),
    supported: function() {
        console.log('Supported architectures:');
        var s = [];
        for (var arch in this.archs) {
            s.push(arch);
        }
        console.log('    ' + s.join(', '));
    }
};