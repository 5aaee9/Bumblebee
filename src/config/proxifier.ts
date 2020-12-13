import { Render, RenderState } from '@/types/config';
import format from 'xml-formatter'

export class ProxifierRender implements Render {
    render(state: RenderState): string {
        return format(`
            <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <ProxifierProfile version="102" platform="Windows" product_id="0" product_minver="400">
                <Options>
                    <Resolve>
                        <AutoModeDetection enabled="false" />
                        <ViaProxy enabled="true" />
                        <ExclusionList OnlyFromListMode="false">%ComputerName%; localhost; *.local</ExclusionList>
                        <DnsUdpMode>0</DnsUdpMode>
                    </Resolve>
                    <Encryption mode="basic" />
                    <ConnectionLoopDetection enabled="false" resolve="true" />
                    <ProcessOtherUsers enabled="true" />
                    <ProcessServices enabled="false" />
                    <HandleDirectConnections enabled="false" />
                    <HttpProxiesSupport enabled="false" />
                </Options>
                <ProxyList>
                    ${state.proxies.join('\n')}
                </ProxyList>
                <ChainList />
                <RuleList>
                    ${state.rules.join('\n')}
                </RuleList>
            </ProxifierProfile>
        `, {
            collapseContent: true,
        })
    }
}
