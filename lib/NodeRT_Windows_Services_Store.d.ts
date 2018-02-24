declare module "windows.services.store" {
  export class StoreContract {
    constructor();
  }

  export class StorePackageUpdateStatus {
    packageFamilyName: String;
    packageDownloadSizeInBytes: Number;
    packageBytesDownloaded: Number;
    packageDownloadProgress: Number;
    totalDownloadProgress: Number;
    packageUpdateState: StorePackageUpdateState;
    constructor();
  }

  export enum StorePurchaseStatus {
    succeeded,
    alreadyPurchased,
    notPurchased,
    networkError,
    serverError,
  }

  export enum StoreConsumableStatus {
    succeeded,
    ınsufficentQuantity,
    networkError,
    serverError,
  }

  export enum StoreDurationUnit {
    minute,
    hour,
    day,
    week,
    month,
    year,
  }

  export enum StorePackageUpdateState {
    pending,
    downloading,
    deploying,
    completed,
    canceled,
    otherError,
    errorLowBattery,
    errorWiFiRecommended,
    errorWiFiRequired,
  }

  export class StoreProduct {
    description: String;
    extendedJsonData: String;
    hasDigitalDownload: Boolean;
    ımages: Object;
    ınAppOfferToken: String;
    ısInUserCollection: Boolean;
    keywords: Object;
    language: String;
    linkUri: Object;
    price: StorePrice;
    productKind: String;
    skus: Object;
    storeId: String;
    title: String;
    videos: Object;
    constructor();

    getIsAnySkuInstalledAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreProductPagedQueryResult {
    extendedError: Number;
    hasMoreResults: Boolean;
    products: Object;
    constructor();

    getNextAsync(callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

  }

  export class StorePurchaseProperties {
    name: String;
    extendedJsonData: String;
    constructor();
    constructor(name: String);

  }

  export class StoreLicense {
    expirationDate: Date;
    extendedJsonData: String;
    ınAppOfferToken: String;
    ısActive: Boolean;
    skuStoreId: String;
    constructor();

  }

  export class StoreImage {
    caption: String;
    height: Number;
    ımagePurposeTag: String;
    uri: Object;
    width: Number;
    constructor();

  }

  export class StoreVideo {
    caption: String;
    height: Number;
    previewImage: StoreImage;
    uri: Object;
    videoPurposeTag: String;
    width: Number;
    constructor();

  }

  export class StoreSku {
    availabilities: Object;
    bundledSkus: Object;
    collectionData: StoreCollectionData;
    customDeveloperData: String;
    description: String;
    extendedJsonData: String;
    ımages: Object;
    ısInUserCollection: Boolean;
    ısSubscription: Boolean;
    ısTrial: Boolean;
    language: String;
    price: StorePrice;
    storeId: String;
    subscriptionInfo: StoreSubscriptionInfo;
    title: String;
    videos: Object;
    constructor();

    getIsInstalledAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StorePrice {
    currencyCode: String;
    formattedBasePrice: String;
    formattedPrice: String;
    formattedRecurrencePrice: String;
    ısOnSale: Boolean;
    saleEndDate: Date;
    constructor();

  }

  export class StorePurchaseResult {
    extendedError: Number;
    status: StorePurchaseStatus;
    constructor();

  }

  export class StoreAvailability {
    endDate: Date;
    extendedJsonData: String;
    price: StorePrice;
    storeId: String;
    constructor();

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreCollectionData {
    acquiredDate: Date;
    campaignId: String;
    developerOfferId: String;
    endDate: Date;
    extendedJsonData: String;
    ısTrial: Boolean;
    startDate: Date;
    trialTimeRemaining: Number;
    constructor();

  }

  export class StoreSubscriptionInfo {
    billingPeriod: Number;
    billingPeriodUnit: StoreDurationUnit;
    hasTrialPeriod: Boolean;
    trialPeriod: Number;
    trialPeriodUnit: StoreDurationUnit;
    constructor();

  }

  export class StoreContext {
    user: Object;
    constructor();

    static getDefault(): StoreContext;


    static getForUser(user: Object): StoreContext;


    getCustomerPurchaseIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;

    getCustomerCollectionsIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;

    getAppLicenseAsync(callback: (error: Error, result: StoreAppLicense) => void): void ;

    getStoreProductForCurrentAppAsync(callback: (error: Error, result: StoreProductResult) => void): void ;

    getStoreProductsAsync(productKinds: Object, storeIds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: Number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    getUserCollectionAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getUserCollectionWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: Number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    reportConsumableFulfillmentAsync(productStoreId: String, quantity: Number, trackingId: String, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    getConsumableBalanceRemainingAsync(productStoreId: String, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    acquireStoreLicenseForOptionalPackageAsync(optionalPackage: Object, callback: (error: Error, result: StoreAcquireLicenseResult) => void): void ;

    requestPurchaseAsync(storeId: String, callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storeId: String, storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

    getAppAndOptionalStorePackageUpdatesAsync(callback: (error: Error, result: Object) => void): void ;

    requestDownloadStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackagesAsync(storeIds: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    addListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    on(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    off(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StoreSendRequestResult {
    extendedError: Number;
    response: String;
    constructor();

  }

  export class StoreAppLicense {
    addOnLicenses: Object;
    expirationDate: Date;
    extendedJsonData: String;
    ısActive: Boolean;
    ısTrial: Boolean;
    ısTrialOwnedByThisUser: Boolean;
    skuStoreId: String;
    trialTimeRemaining: Number;
    trialUniqueId: String;
    constructor();

  }

  export class StoreProductResult {
    extendedError: Number;
    product: StoreProduct;
    constructor();

  }

  export class StoreProductQueryResult {
    extendedError: Number;
    products: Object;
    constructor();

  }

  export class StoreConsumableResult {
    balanceRemaining: Number;
    extendedError: Number;
    status: StoreConsumableStatus;
    trackingId: String;
    constructor();

  }

  export class StoreAcquireLicenseResult {
    extendedError: Number;
    storePackageLicense: StorePackageLicense;
    constructor();

  }

  export class StorePackageUpdate {
    mandatory: Boolean;
    package: Object;
    constructor();

  }

  export class StorePackageUpdateResult {
    overallState: StorePackageUpdateState;
    storePackageUpdateStatuses: Object;
    constructor();

  }

  export class StorePackageLicense {
    ısValid: Boolean;
    package: Object;
    constructor();

    releaseLicense(): void;

    close(): void;
    addListener(type: "LicenseLost", listener: (ev: Event) => void): void ;
    removeListener(type: "LicenseLost", listener: (ev: Event) => void): void ;
    on(type: "LicenseLost", listener: (ev: Event) => void): void ;
    off(type: "LicenseLost", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StoreRequestHelper {
    constructor();

    static sendRequestAsync(context: StoreContext, requestKind: Number, parametersAsJson: String, callback: (error: Error, result: StoreSendRequestResult) => void): void ;


  }

}



