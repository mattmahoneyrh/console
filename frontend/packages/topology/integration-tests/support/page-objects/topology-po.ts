export const topologyPO = {
  switcher: '[data-test-id="topology-switcher-view"]',
  noWorkLoadsText: 'h2.co-hint-block__title',
  title: 'h1.ocs-page-layout__title',
  search: '[data-test-id="item-filter"]',
  emptyStateIcon: 'div.pf-c-empty-state__icon',
  graph: {
    reset: '#reset-view',
    zoomIn: '#zoom-in',
    zoomOut: '#zoom-out',
    fitToScreen: '#fit-to-screen',
    emptyGraph: '[data-test-id="topology"]',
    filterDropdown: '[id^=pf-select-toggle-id]',
    nodeLabel: 'g.odc-base-node__label',
    knativeServiceNode: '[data-type="knative-service"]',
    eventSourceNode: '[data-type="event-source-link"]',
    contextMenu: '#popper-container ul',
    workloads: 'g[data-surface="true"]',
    node: '[data-test-id="base-node-handler"]',
    workload: '[data-type="workload"]',
    deleteWorkload: '[data-test="confirm-action"]',
    eventSourceWorkload: '[data-type="event-source"]',
    applicationGroupingTitle: '.odc-topology-list-view__application-label',
    filterByResource: {
      filterByResourceDropDown: '.pf-c-select__toggle-text',
      deploymentResource: '.co-m-resource-icon.co-m-resource-deployment',
      deploymentConfigResource: '.co-m-resource-icon.co-m-resource-deploymentconfig',
    },
    contextMenuOptions: {
      addToProject: '.pf-topology-context-sub-menu',
    },
  },
  list: {
    appName: '#HelmRelease ul li div',
    nodeName: '#HelmRelease ul li div',
    resourceTitle: 'pf-c-data-list__cell.odc-topology-list-view__kind-label',
  },
  sidePane: {
    actionsDropDown: '[data-test-id="actions-menu-button"]',
    dialog: '[role="dialog"]',
    title: '[role="dialog"] h1',
    tabs: '[role="dialog"] li button',
    sectionTitle: '[role="dialog"] h2',
    close: 'button[aria-label="Close"]',
    labelsList: '[data-test="label-list"]',
    editAnnotations: '[data-test="edit-annotations"]',
    tabName: '[role="dialog"] li button',
    healthCheckAlert: 'div.ocs-health-checks-alert',
    podScale: 'button.pf-c-button.pf-m-plain.pf-m-block',
    podText: 'text.pf-chart-donut-title.pod-ring__center-text',
    detailsTab: {
      labels: 'dt[data-test-selector$="Labels"]',
      annotations: '[data-test-selector="details-item-label__Annotations"]',
      labelsEdit: '[data-test="Labels-details-item__edit-button"]',
    },
    resourcesTab: {
      startLastRun: '[role="dialog"] li.list-group-item.pipeline-overview div button',
      pipelineRuns: 'li.odc-pipeline-run-item',
    },
    monitoringTab: {
      viewMonitoringDashBoardLink: '',
    },
    releaseNotesTab: {},
  },
  addStorage: {
    pvc: {
      useExistingClaim: 'input[value="existing"]',
      createNewClaim: {
        newClaim: 'input[value="new]',
        storageClass: '#storageclass-dropdown',
        pvcName: '#pvc-name',
        accessMode: {
          singleUser: 'input[value="ReadWriteOnce"]',
          sharedAccess: 'inputp[value="ReadWriteMany"]',
          readOnly: 'input[value="ReadOnlyMany"]',
          size: '#request-size-input',
          showLabelSelector: 'input[name="showLabelSelector"]',
        },
        volumeMode: {
          fileSystem: 'input[value="Filesystem"]',
          block: 'input[value="Block"]',
          devicePath: '#device-path',
        },
      },
    },
    mountPath: '#mount-path',
    subPath: '#subpath',
    mountAsReadOnly: 'input[name="mountAsReadOnly"]',
    save: '#save-changes',
  },
  revisionDetails: {
    detailsTab: '[data-test-id="horizontal-link-Details"]',
    yamlTab: '[data-test-id="horizontal-link-YAML"]',
    details: {
      resourceSummaryTitle: '[data-test-section-heading="Revision Details"]',
      resourceSummary: '[data-test-id="resource-summary"]',
      conditionsTitle: '[data-test-section-heading="Conditions"]',
    },
    yaml: {
      save: '[data-test="save-changes"]',
      reload: '[data-test="reload-object"]',
      cancel: '[data-test="cancel"]',
    },
  },
  highlightNode: '.is-filtered',
};
