export function useScoreUrlGenerator() {

    const { public: { currentCommitSha }, app: { baseURL: baseUrl } } = useRuntimeConfig();

    function localScoreUrlGenerator(filename) {
        const suffix = currentCommitSha ? `?${currentCommitSha}` : '';
        const url = `${baseUrl}kern/${filename}`;
        return `${url}${suffix}`;
    }

    function githubScoreUrlGenerator(id) {
        const url = `https://github.com/percussionfloh/satzmodelle-tool/blob/master/kern/${id}.krn`;
        return url;
    }

    function githubRawScoreUrlGenerator(id) {
        const url = `https://raw.githubusercontent.com/percussionfloh/satzmodelle-tool/refs/heads/master/kern/${id}.krn`;
        return url;
    }

    function vhvScoreUrlGenerator(id) {
        const url = `https://verovio.humdrum.org/?file=${encodeURIComponent(githubRawScoreUrlGenerator(id))}`;
        return url;
    }

    return {
        localScoreUrlGenerator,
        githubScoreUrlGenerator,
        githubRawScoreUrlGenerator,
        vhvScoreUrlGenerator,
    };
}
