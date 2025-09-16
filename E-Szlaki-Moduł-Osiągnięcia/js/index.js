document.addEventListener("DOMContentLoaded", (e) => {
    const moduleContainer = Utils.getModuleContainer() 

    new MainNavigation(moduleContainer); 

    new UserProfilePanel('#profil')
    new AchievementsPanel('#osiagniecia')
    new AwardsPanel('#nagrody') 

    CustomTabs.initAll(moduleContainer)  
})  