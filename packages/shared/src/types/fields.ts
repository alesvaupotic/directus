import { Column } from 'knex-schema-inspector/dist/types/column';

type Translations = {
	language: string;
	translation: string;
};

export type Width = 'half' | 'half-left' | 'half-right' | 'full' | 'fill';

export type Type =
	| 'alias'
	| 'bigInteger'
	| 'boolean'
	| 'date'
	| 'dateTime'
	| 'decimal'
	| 'float'
	| 'integer'
	| 'json'
	| 'string'
	| 'text'
	| 'time'
	| 'timestamp'
	| 'binary'
	| 'uuid'
	| 'hash'
	| 'csv'
	| 'unknown';

export type LocalType =
	| 'standard'
	| 'file'
	| 'files'
	| 'm2o'
	| 'o2m'
	| 'm2m'
	| 'm2a'
	| 'presentation'
	| 'translations'
	| 'group';

export type FieldMeta = {
	id: number;
	collection: string;
	field: string;
	group: number | null;
	hidden: boolean;
	interface: string | null;
	display: string | null;
	options: null | Record<string, any>;
	display_options: null | Record<string, any>;
	readonly: boolean;
	sort: number | null;
	special: string[] | null;
	translations: null | Translations[];
	width: Width | null;
	note: string | null;
	system?: true;
};

export interface FieldRaw {
	collection: string;
	field: string;
	type: Type;
	schema: Column | null;
	meta: FieldMeta | null;
}

export interface Field extends FieldRaw {
	name: string;
	children?: Field[] | null;
}