import { defineInterface } from '@directus/shared/utils';
import InterfaceSelectMultipleDropdown from './select-multiple-dropdown.vue';

export default defineInterface({
	id: 'select-multiple-dropdown',
	name: '$t:interfaces.select-multiple-dropdown.select-multiple-dropdown',
	description: '$t:interfaces.select-multiple-dropdown.description',
	icon: 'arrow_drop_down_circle',
	component: InterfaceSelectMultipleDropdown,
	types: ['json', 'csv'],
	options: [
		{
			field: 'choices',
			type: 'json',
			name: '$t:choices',
			meta: {
				width: 'full',
				interface: 'list',
				options: {
					placeholder: '$t:interfaces.select-dropdown.choices_placeholder',
					template: '{{ text }}',
					fields: [
						{
							field: 'text',
							type: 'string',
							name: '$t:text',
							meta: {
								width: 'half',
								interface: 'input',
								options: {
									placeholder: '$t:interfaces.select-dropdown.choices_name_placeholder',
								},
							},
						},
						{
							field: 'value',
							type: 'string',
							name: '$t:value',
							meta: {
								width: 'half',
								interface: 'input',
								options: {
									font: 'monospace',
									placeholder: '$t:interfaces.select-dropdown.choices_value_placeholder',
								},
							},
						},
					],
				},
			},
		},
		{
			field: 'allowOther',
			name: '$t:interfaces.select-dropdown.allow_other',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				options: {
					label: '$t:interfaces.select-dropdown.allow_other_label',
				},
			},
			schema: {
				default_value: false,
			},
		},
		{
			field: 'allowNone',
			name: '$t:interfaces.select-dropdown.allow_none',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				options: {
					label: '$t:interfaces.select-dropdown.allow_none_label',
				},
			},
			schema: {
				default_value: false,
			},
		},
		{
			field: 'placeholder',
			name: '$t:placeholder',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
				options: {
					placeholder: '$t:enter_a_placeholder',
				},
			},
		},
		{
			field: 'icon',
			name: '$t:icon',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'select-icon',
			},
		},
	],
	recommendedDisplays: ['labels'],
});
