/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @file Horizontal Page Break
 */

// Register a plugin named "newpage".
CKEDITOR.plugins.add( 'newpage',
{
	init : function( editor )
	{
		editor.addCommand( 'newpage',
			{
				modes : { wysiwyg:1, source:1 },

				exec : function( editor )
				{
					var command = this;
					editor.setData( editor.config.newpage_html, function()
					{
						// Save the undo snapshot after all document changes are affected. (#4889)
						setTimeout( function ()
						{
							editor.fire( 'afterCommandExec',
							{
								name: command.name,
								command: command
							} );

						}, 200 );
					} );
					editor.focus();
				},
				async : true
			});

		editor.ui.addButton( 'NewPage',
			{
				label : editor.lang.newPage,
				command : 'newpage'
			});
	}
});
/**
 * The HTML to load in the editor when the "new page" command is executed.
 * @type String
 * @default ''
 * @example
 * config.newpage_html = '&lt;p&gt;Type your text here.&lt;/p&gt;';
 */
CKEDITOR.config.newpage_html = '';