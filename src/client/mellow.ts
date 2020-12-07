import SurgeConfig from '@/config/surge';
import { Client, AllOptions, KeywordMapping } from '@/types/client';
import { Render } from '@/types/config';

export default class MellowClient implements Client {
    /* eslint-disable @typescript-eslint/naming-convention */
    static keywordMapping: KeywordMapping = {
        DOMAIN_SUFFIX: 'DOMAIN-SUFFIX',
        PROCESS_NAME: 'PROCESS-NAME',
        FINAL: 'FINAL',
        DOMAIN: 'DOMAIN',
        DOMAIN_KEYWORD: 'DOMAIN-KEYWORD',
        GEO_IP: 'GEOIP',
    }
    /* eslint-enable @typescript-eslint/naming-convention */

    supportKeyword(keyword: AllOptions): boolean {
        return keyword.type in MellowClient.keywordMapping
    }

    private generateFromOptions(option: AllOptions): string[] {
        switch (option.type) {
            case 'DOMAIN_SUFFIX':
                return [option.domain, option.proxy]

            case 'PROCESS_NAME':
                return [option.processName, option.proxy]

            case 'FINAL':
                return [option.proxy]

            case 'DOMAIN':
                return [option.domain, option.proxy]

            case 'DOMAIN_KEYWORD':
                return [option.keyword, option.proxy]

            case 'GEO_IP':
                return [option.geo, option.proxy]

            default:
                throw new Error('Not supported')
        }
    }

    renderRule(option: AllOptions): string {
        const args = [MellowClient.keywordMapping[option.type], ...this.generateFromOptions(option)]

        return args.join(', ')
    }

    getRender(): Render {
        return new SurgeConfig()
    }
}

