
export type ProductItemType = {
    id: string,
    PRODUCT: string,
    PRICE: number,
    qty: number,
    CODE: string,          // Add these properties
    COLOR: string,         // Add these properties
    SIZE: string,          // Add these properties
    FABRIC_COLOR: string,  // Add these properties
    FABRIC_QTY: number,    // Add these properties
    LINING_COLOR: string,  // Add these properties
    LINING_QTY: number,    // Add these properties
    CUSTOMER: string,      // Add these properties
  }


  
export type CartItemType = {
    id: string,
    PRODUCT: string,
    PRICE: number,
    stock:number,
    qty: number,
    CODE: string,          // Add these properties
    COLOR: string,         // Add these properties
    SIZE: string,          // Add these properties
    FABRIC_COLOR: string,  // Add these properties
    FABRIC_QTY: number,    // Add these properties
    LINING_COLOR: string,  // Add these properties
    LINING_QTY: number,    // Add these properties
    CUSTOMER: string,      // Add these properties
  }