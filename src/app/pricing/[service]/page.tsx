import CustomWebDevPricingPage from "@/components/CustomWebDevPricingPage";
import MobileDevPricingPage from "@/components/mobileDevPricingPage";
import AiDevPricingPage from "@/components/aiDevPricingPage";
import SaasDevPricingPage from "@/components/SaasDevPricingPage";

import { notFound } from "next/navigation";

interface params{
    params:{service:string}
}

export default async function ServicePricingPage({params}:params){
    const {service}= await params;

    if(!service){
        notFound();
    }

    switch(service){
        case "custom-web-development":return <CustomWebDevPricingPage/> 
        case "app-development":return <MobileDevPricingPage/>
        case "AI-development":return <AiDevPricingPage/>
        case "Saas-Product-Development":return <SaasDevPricingPage/>
        default: notFound();
    }
}

ServicePricingPage.displayName = 'ServicePricingPage';