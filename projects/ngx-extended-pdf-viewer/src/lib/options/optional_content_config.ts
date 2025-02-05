export interface OptionalContentConfig {
    constructor(data: any);
    name: any;
    creator: any;
    _order: any;
    _groups: Map<any, any>;
    _evaluateVisibilityExpression(array: any): any;
    isVisible(group: any): any;
    setVisibility(id: any, visible?: boolean): void;
    getOrder(): any;
    getGroups(): any;
    getGroup(id: any): any;
}

export interface OptionalContentGroup {
  visible: boolean;
  name: string;
  intent: any;
}

export interface PdfLayer {
  layerId: string;
  name: string;
  visible: boolean;
}
