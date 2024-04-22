import sys


def chopSimpleHydraOfSize(n):
    hydra = [1] * n
    numSteps = 0
    vibecheck = 2
    m = n
    oom = 0
    while hydra[0] != 0:
        # if numSteps > vibecheck:
        #     e = 10
        #     vibecheck *= 10**e
        #     oom += e
        #     print(oom, sys.getsizeof(numSteps))


        m = findLevelOfLowestFreeHead(hydra)
        hydra, numSteps = chopHeadAtLevel(hydra, m, numSteps)
        hydra = spawnNHeadsFromLevelMChop(hydra, numSteps, m)
    return numSteps


def chopSimpleHydraOfSizeEst(n):
    hydra = [1] * n
    numSteps = 0
    vibecheck = 2
    m = n
    oom = 0
    exp2count = 0
    while hydra[0] != 0:
        if numSteps > vibecheck:
            e = 10
            vibecheck *= 10**e
            oom += e
            print(oom, sys.getsizeof(numSteps))

        m = findLevelOfLowestFreeHead(hydra)
        hydra, numSteps, exp2count = chopHeadAtLevelEst(hydra, m, numSteps, exp2count)
        hydra = spawnNHeadsFromLevelMChop(hydra, numSteps, m)
    return numSteps,exp2count


def chopSimpleHydra(hydra):
    numSteps = 0
    vibecheck = 2
    m = len(hydra)
    while hydra[0] != 0:
        print(numSteps,hydra)
        if numSteps > 110908090:
            print(hydra)
            vibecheck *= 2
            print(numSteps)
        m = findLevelOfLowestFreeHead(hydra)
        hydra, numSteps = chopHeadAtLevel(hydra, m, numSteps)
        hydra = spawnNHeadsFromLevelMChop(hydra, numSteps, m)
    return numSteps


def findLevelOfLowestFreeHead(hydra):
    if hydra[0] == 0 or len(hydra) == 1:
        return 0

    for i in range(len(hydra)):
        nHead = hydra[i]
        if nHead == 1:
            continue
        if nHead == 0:
            return i - 1
        return i
    return len(hydra) - 1


def chopHeadAtLevel(hydra, m, numSteps):
    if m == 0:
        return chopHeadsAtLevel0(hydra, numSteps)
    if m == 1:
        return chopHeadsAtLevel1(hydra, numSteps)
    numSteps += 1
    hydra[m] = hydra[m] - 1
    return hydra, numSteps


def chopHeadAtLevelEst(hydra, m, numSteps, exp2count):
    if m == 0:
        return chopHeadsAtLevel0Est(hydra, numSteps, exp2count)
    if m == 1:
        return chopHeadsAtLevel1Est(hydra, numSteps, exp2count)
    numSteps += 1
    hydra[m] = hydra[m] - 1
    return hydra, numSteps, exp2count


def chopHeadsAtLevel0Est(hydra, numSteps, exp2count):
    a, b = chopHeadsAtLevel0(hydra, numSteps)
    return a, b, exp2count


def chopHeadsAtLevel0(hydra, numSteps):
    if len(hydra) > 1 and hydra[1] != 0:
        numSteps = numSteps + hydra[0] - 1
        hydra[0] = 1
        return hydra, numSteps
    else:
        numSteps += hydra[0]
        hydra[0] = 0
        return hydra, numSteps


def chopHeadsAtLevel1Est(hydra, numSteps, exp2count):
    if hydra[0] == 1:
        exp2count += hydra[1] - 1
        hydra[1] = 1
        if len(hydra) < 3 or hydra[2] == 0:
            hydra[1] = 0
            numSteps = (numSteps + 1) * 2
        return hydra, numSteps, exp2count
    else:
        numSteps += 1
        hydra[1] = hydra[1] - 1
        return hydra, numSteps, exp2count


def chopHeadsAtLevel1(hydra, numSteps):
    if hydra[0] == 1:
        numSteps = numSteps * 2 + 2
        hydra[1] = hydra[1] - 1
        return hydra, numSteps
    else:
        numSteps += 1
        hydra[1] = hydra[1] - 1
        return hydra, numSteps


def spawnNHeadsFromLevelMChop(hydra, numSteps, m):
    levelToSpawn = m - 1
    if levelToSpawn < 1:
        return hydra
    hydra[levelToSpawn] = hydra[levelToSpawn] + numSteps
    return hydra
