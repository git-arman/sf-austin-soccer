@isTest
public class GenerateData {
    
    public static void initData() {
        removeOldData();
        createNewData();        
    }
    
    public static void removeOldData() {
        DELETE [SELECT id FROM Facility__c];
        DELETE [SELECT id FROM Facility_Type__c];
    }
    
    public static void createNewData()  {
    	List<Account> accounts = createAccounts();
    	List<Contact> contacts = createContacts(accounts);
    	List<Facility_Type__c> facilityTypes = createFacilityTypes();
    	List<Facility__c> facilities = createFacilities(contacts, facilityTypes);
	}

	// ***** New ACCOUNTs ***** //
	private static List<Account> createAccounts() {
		List<Account> accounts = new List<Account>();
        Account account1 = new Account (
        	name = 'Austin Soccer Company 1',
            BillingCity ='Austin',
            BillingCountry ='Texas'
        );
        accounts.add(account1);

        try {
        	insert accounts;
            System.debug('# accounts created = '+accounts.size());
        }
        catch(DmlException dmlExc) {
        	System.Debug(dmlExc.getStackTraceString());
        }
        catch(Exception exc) {
        	System.Debug(exc.getStackTraceString());
        }

        return accounts;
	}
        
    // ***** New CONTACTs ***** //
    private static List<Contact> createContacts(List<Account> accounts) {
    	List<Contact> contacts = new List<Contact>();

        Contact contact1 = new Contact(
        	FirstName = 'Messi',
            LastName = 'Lionel',
            AccountId = accounts[0].Id,
            email = 'contact1@austinsoccerco.com'
        );
        contacts.add(contact1);

        Contact contact2 = new Contact(
        	FirstName = 'Suarez',
            LastName = 'Luis',
            AccountId = accounts[0].Id,
            email = 'contact2@austinsoccerco.com'
        );
		contacts.add(contact2);

        Contact contact3 = new Contact(
        	FirstName = 'Iniesta',
            LastName = 'Andres',
            AccountId = accounts[0].Id,
            email = 'contact3@austinsoccerco.com'
        );
        contacts.add(contact3);

		try {
        	insert contacts;
            System.debug('# contacts created = '+contacts.size());
        }
        catch(DmlException dmlExc) {
        	System.Debug(dmlExc.getStackTraceString());
        }
        catch(Exception exc) {
        	System.Debug(exc.getStackTraceString());
        }

        return contacts;
	}

    // ***** New FACILITY TYPEs ***** //
    private static List<Facility_Type__c> createFacilityTypes() {
    	List<Facility_Type__c> facilityTypes = new List<Facility_Type__c>();

    	Facility_Type__c facilityType1 = new Facility_Type__c (
            Name = 'Stadium'
        );
        facilityTypes.add(facilityType1);

        Facility_Type__c facilityType2 = new Facility_Type__c (
            Name = 'Indoor Field'
        );
        facilityTypes.add(facilityType2);

        Facility_Type__c facilityType3 = new Facility_Type__c (
            Name = 'Park'
        );
        facilityTypes.add(facilityType3);

		try {
        	insert facilityTypes;
            System.debug('# facilityTypes created = '+facilityTypes.size());
        }
        catch(DmlException dmlExc) {
        	System.Debug(dmlExc.getStackTraceString());
        }
        catch(Exception exc) {
        	System.Debug(exc.getStackTraceString());
        }

        return facilityTypes;
    }

    // ***** New FACILITIES ***** //
    private static List<Facility__c> createFacilities(List<Contact> contacts, 
    	List<Facility_Type__c> facilityTypes) {
    	
    	List<Facility__c> facilities = new List<Facility__c>();

    	Facility__c facility1 = new Facility__c (
            Name = 'COTA Stadium',
            Description__c = 'Soccer stadium',
            Primary_Contact__c =  contacts[0].Id,
            Facility_Type__c = facilityTypes[0].Id,
            Hours__c = 'Monday to Friday 8 am to 5 pm',
            In_Business__c = true,
            Year_Built__c = Date.valueOf('2017-01-01'),
            Picture__c = '/resource/Stadiums/COTA.jpg',
            Main_Location__latitude__s = 30.135184,
            Main_Location__longitude__s = -97.635779
        );
        facilities.add(facility1);

		try {
        	insert facilities;
            System.debug('# facilities created = '+facilities.size());
        }
        catch(DmlException dmlExc) {
        	System.Debug(dmlExc.getStackTraceString());
        }
        catch(Exception exc) {
        	System.Debug(exc.getStackTraceString());
        }

        return facilities;
    }
}