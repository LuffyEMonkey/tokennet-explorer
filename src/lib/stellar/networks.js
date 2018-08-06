const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  return networks.public
}

export {networks as default, hostnameToNetworkType}
