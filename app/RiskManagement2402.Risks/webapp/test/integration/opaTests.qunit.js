sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagement2402/Risks/test/integration/FirstJourney',
		'RiskManagement2402/Risks/test/integration/pages/RisksList',
		'RiskManagement2402/Risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagement2402/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);