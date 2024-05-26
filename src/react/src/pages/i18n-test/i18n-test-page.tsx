import { Trans, useTranslation } from "react-i18next";
import { i18n } from "~/core/i18n";
import { Page } from "~/core/page";
import { Text } from "~/core/text";

export const I18nTestPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Text>I18n test page</Text>
      <Trans i18nKey={i18n.keys.common.product} />
      <Trans i18nKey={i18n.keys.error.existsStore} />
      <Text>{t(i18n.keys.common.store)}</Text>
    </Page>
  );
};
