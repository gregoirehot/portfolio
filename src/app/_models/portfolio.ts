export class Portfolio {
    id: number;
    title: string;
    description: string;
    images: Images[];
    visible: boolean;
    url?: string;
}

export class Images {
    id: number;
    label: string;
    source: string;
    description?: string;
    visible: boolean;
    main: boolean;
}