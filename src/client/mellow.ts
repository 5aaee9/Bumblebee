import { Client, AllOptions } from "@/types/client";

export default class MellowClient implements Client {
    static keywordMapping: Record<AllOptions["Type"], string> = {
        DOMAIN_SUFFIX: 'DOMAIN-SUFFIX',
        PROCESS_NAME: 'PROCESS-NAME',
        FINAL: 'FINAL',
    }

    supportKeyword(keyword: AllOptions): boolean {
        return keyword.Type in MellowClient.keywordMapping
    }

    renderRule(options: AllOptions): string {
        // TODO: map options
        if (options.Type === 'DOMAIN_SUFFIX') {
            return options.Domain
        }

        return options.Type
    }
}

