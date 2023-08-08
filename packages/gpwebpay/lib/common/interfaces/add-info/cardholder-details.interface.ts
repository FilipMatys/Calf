/**
 * Card holder details
 * @description Card holder details
 */
export interface ICardHolderDetails {
     name: string,
     loginId?: string,
     loginType?: string,
     loginTime?: number,
     userAccountId?: string,
     userAccountCreatedDate?: number,
     userAccountAge?: string,
     userAccountLastChangeDate?: number,
     userAccountLastChangeAge?: string,
     userAccountPasswordChangeDate?: number,
     userAccountPasswordChangeAge?: string,
     socialNetworkId?: string,
     email: string,
     phoneCountry?: number,
     phone?: number,
     mobilePhoneCountry?: number,
     mobilePhone?: number,
     workPhoneCountry?: number,
     workPhone?: number,
     clientIpAddress?: string,
}